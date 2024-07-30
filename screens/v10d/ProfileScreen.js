import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/native-stack';
import Header from '../nomio/Header'; 
import InfoSection from '../nomio/InfoSection';
import Footer from '../nomio/Footer';

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <InfoSection />
            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});