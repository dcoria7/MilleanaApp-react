import { View, Text, Image, StyleSheet } from 'react-native';

export interface ProductItemProps {
    title: string;
    description: string;
    price: string;
    image: string;
  }

  export const ProductItem = ({
    title,
    description,
    price,
    image,
  }: ProductItemProps) => {
    return (
      <View>
        <Image source={{ uri: image }} />
        <View>
          <Text>{title}</Text>
          <Text>{description}</Text>
          <Text>{price}</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      gap: 8,
    },
    image: {
      width: '100%',
      height: 112,
      objectFit: 'cover',
    },
    infoContainer: {
      flexDirection: 'column',
      gap: 5,
    },
    titleLabel: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#20303C',
    },
    descriptionLabel: {
      fontWeight: '400',
      fontSize: 14,
      color: '#6E7881',
    },
    priceLabel: {
      fontWeight: '400',
      fontSize: 14,
      color: '#4D5963',
    },
  });
  