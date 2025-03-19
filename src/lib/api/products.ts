export interface Product {
	id: number;
	productTitle: string;
	productImg: string;
	productPrice: number;
	currency: string;
	description?: string;
	author?: string;
	features?: string[];
	editionNumber?: string;
	rarity?: string;

	//question mark means optional
}

const products: Product[] = [
	{
		id: 1,
		productTitle: 'Watermelon 007',
		productImg: '/images/nft-1.png',
		productPrice: 6.9,
		currency: 'ETH',
		description:
			'Digital records that represent a given value and that can only be bought and sold on the cryptocurrency blockchain.',
		author: 'Adrian Gonsales',
		features: ['unique', 'watermelon'],
		editionNumber: '1/100',
		rarity: 'Super rare'
	},
	{
		id: 2,
		productTitle: 'Sneaker 003',
		productImg: '/images/nft-2.png',
		productPrice: 4.2,
		currency: 'ETH',
		author: 'Mike Johnson',
		features: ['sneaker', 'sport'],
		editionNumber: '2/100',
		rarity: 'Rare'
	},
	{
		id: 3,
		productTitle: 'Icecream 001',
		productImg: '/images/nft-3.png',
		productPrice: 3.5,
		currency: 'ETH',
		author: 'Sarah Smith',
		features: ['cream'],
		editionNumber: '3/100',
		rarity: 'Super rare'
	}
];

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const productsApi = {
	getAllProducts: async (): Promise<Product[]> => {
		await delay(100);
		return products;
	},

	getProduct: async (id: number): Promise<Product | undefined> => {
		await delay(100);
		return products.find((p) => p.id === id);
	}
};
