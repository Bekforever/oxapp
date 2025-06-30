export interface ProductParams {
	page: number
	size: number
}

export interface Product {
	id:                number;
	taxable:           boolean;
	shippable:         boolean;
	countable:         boolean;
	cookable:          boolean;
	composite:         boolean;
	scalable:          boolean;
	tracking:          boolean;
	sellable:          boolean;
	vatPercent:        null;
	name:              string;
	technicalCardId:   null;
	writeOffMethod:    number;
	countInBox:        null;
	zone:              number;
	unit:              string;
	properties:        Proproperty[];
	videos:            unknown[];
	productProperties: Proproperty[];
	barcode:           string;
	showMarket:        boolean;
	lastUpdateTime:    Date;
	technicalCard:     boolean;
	baseUnitRatio:     unknown[];
	product:           number;
	sku:               string;
	crossSellTags:     null;
	category:          number;
	supplier:          string;
	supplierId:        number;
	productName:       string;
	brand:             number;
	description:       string;
	importProperties:  unknown[];
	recSellPrice:      null;
	recSupplierPrice:  null;
	correctionType:    number;
	shortDescription:  string;
	stocks:            Stock[];
	images:            Image[];
	analogs:           unknown[];
	modifiers:         unknown[];
	tags:              unknown[];
}

export interface Image {
	id:           number;
	brand:        number;
	zone:         number;
	originalName: string;
	name:         string;
	extension:    string;
	mimeType:     string;
	createdAt:    Date;
	updatedAt:    Date;
	sort:         number;
	urls:         Record<string, string | null>;
}

export interface Proproperty {
	name:  string;
	value: string;
}

export interface Stock {
	id:                  string;
	tracking:            boolean;
	countable:           boolean;
	composite:           boolean;
	properties:          unknown[];
	sellPrice:           SellPrice;
	supplyPrice:         SupplyPrice;
	imported:            Date;
	impport:             number;
	originalImport:      number;
	transfer:            null;
	importCount:         string;
	transferCount:       string;
	originalImportCount: string;
	supplier:            number;
	count:               number;
	location:            number;
	expirationDate:      null;
}

export interface SellPrice {
	UZS:   number;
	USD:   number;
	ratio: SellPriceRatio;
	first: string;
}

export interface SellPriceRatio {
	"UZS/USD": number;
}

export interface SupplyPrice {
	UZS:   number;
	USD:   number;
	ratio: Record<string, number>;
	first: string;
}
