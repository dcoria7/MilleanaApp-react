import { SafeAreaView, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, Image, StyleSheet, Platform } from 'react-native';
import { ProductItem } from '@/components/ProductItem';
import { ProductsList } from '@/components/ProductList';
import { ProductItemProps } from '@/components/ProductItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { createClient, OAuthStrategy } from '@wix/sdk';
import * as stores from '@wix/stores';

export function HomePage() {
  const [products, setProducts] = useState<ProductItemProps[]>([]);

  useEffect(() => {
    async function fetchProductsFromWix() {
      const wix = createClient({
        auth: OAuthStrategy({ clientId: 'a28c3b8c-f9ce-455b-8b12-7094431e37bc' }),
        modules: { stores },
      });

      const responseStore = await wix.stores.products.queryProducts().find();
      const responseCollections = await wix.stores.collections.queryCollections().find();

      setProducts(
        responseCollections.items.map((item) => ({
          title: item.name!,
          description: item.description!,
          price: item.name!,
          image: item.media!.mainMedia!.image!.url!,
        })),
      );
    }

    fetchProductsFromWix();
  }, []);

  return (
    <SafeAreaView>
      <ThemedView style={styles.container}>
      {/* <ThemedText type="title">Coming soon...</ThemedText> */}
      <ProductsList products={products} />
      </ThemedView>
      
    </SafeAreaView>
  );
}

const fakeProducts: ProductItemProps[] = [
  {
    title: 'Empty!',
    description: 'Here is a kitty instead',
    price: '50.00$',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600',
  },
  {
    title: 'Empty!',
    description: 'Here is a kitty instead',
    price: '50.00$',
    image: 'https://firebasestorage.googleapis.com:443/v0/b/productosalva-cd306.appspot.com/o/postC4D8C5C7-EA30-45BF-A9DF-EB735C397FAA?alt=media&token=49783ffa-7499-4c6f-8ae6-bc8da16cd13d'
  }
];

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    gap: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});