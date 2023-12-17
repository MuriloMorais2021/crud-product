import React, { useEffect, useState } from "react"
import { Text, View, Image, TouchableOpacity, TextInput, FlatList } from "react-native"
import { styles } from "./home.styles"
import AsyncStorage from '@react-native-async-storage/async-storage'


export const Home = () => {
    const [productList, setProductList] = useState([]);
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')


    const trash = require('../../../assets/img/trash.png');

    useEffect(() => {
        loadProducts();
    }, []);


    const formatPrice = (inputPrice) => {
        const numericOnly = inputPrice.replace(/[^\d]/g, '');
        const formattedPrice = numericOnly
            ? `R$ ${parseFloat(numericOnly / 100).toFixed(2)}`
            : '';

        return formattedPrice;
    };

    const handleChangeProductName = (text) => {
        setProductName(text);
    };


    const handleChangePrice = (text) => {
        setPrice(formatPrice(text));
    };


    const handleAddProduct = () => {
        if (productName && price) {
            const newProduct = {
                id: Math.random().toString(),
                name: productName,
                price: price,
            };

            setProductList((prevList) => [...prevList, newProduct]);
            setProductName("");
            setPrice("");
            saveProducts([...productList, newProduct]);
        }
    };

    const handleRemoveProduct = (productId) => {
        setProductList((prevList) => prevList.filter((item) => item.id !== productId));
        saveProducts(productList.filter((item) => item.id !== productId));
    };

    const saveProducts = async (products) => {
        try {
            const jsonProducts = JSON.stringify(products);
            await AsyncStorage.setItem('productList', jsonProducts);
        } catch (error) {
            console.error('Erro ao salvar produtos no AsyncStorage:', error);
        }
    };

    const loadProducts = async () => {
        try {
            const jsonProducts = await AsyncStorage.getItem('productList');
            const products = jsonProducts ? JSON.parse(jsonProducts) : [];
            setProductList(products);
        } catch (error) {
            console.error('Erro ao carregar produtos do AsyncStorage:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTitle}>
                    <Text>CADASTRO DE PRODUTOS</Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChangeProductName}
                        value={productName}
                        placeholder="Produto"
                        placeholderTextColor={{ color: '#ccc' }}
                    />
                    <TextInput
                        style={styles.inputPrice}
                        onChangeText={handleChangePrice}
                        keyboardType="numeric"
                        value={price}
                        placeholder="Preço"
                        placeholderTextColor={{ color: '#ccc' }}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                {
                    (productList.length > 0) ?
                        <FlatList
                            data={productList}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.cardProducts}>
                                    <View style={styles.contentProd}>
                                        <Text style={styles.titleProd}>{item.name}</Text>
                                        <Text>{item.price}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => handleRemoveProduct(item.id)}>
                                        <Image source={trash} />
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                        :
                        <View style={styles.contentEmpty}>
                            <Text style={styles.noItemsText}>Não há itens adicionados.</Text>
                        </View>
                }
            </View>
        </View>
    )
}