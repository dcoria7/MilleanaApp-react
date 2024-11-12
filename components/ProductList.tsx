import { FlatList, Text, StyleSheet } from 'react-native';
import { ProductItem, ProductItemProps } from './ProductItem';

export interface ProductsListProps {
  products: ProductItemProps[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <FlatList
      data={products}
      numColumns={2}
      columnWrapperStyle={styles.column}
      style={styles.list}
      ListHeaderComponent={<Text style={styles.header}>Tienda</Text>}
      renderItem={({ index, item }) => <ProductItem key={index} {...item} />}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#9E79FD',
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: 10,
  },
  list: {
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  column: {
    gap: 10,
    marginBottom: 10,
  },
});