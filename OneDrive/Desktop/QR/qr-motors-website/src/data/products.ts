import { Product } from '@/components/ProductCard'

// Sample product data based on Q.R Motors' actual catalog
export const sampleProducts: Product[] = [
    // Tractor Parts
    {
        id: 'oil-filter-mahindra-575',
        title: 'Oil Filter for Mahindra 575 DI',
        partNumber: 'OF-MH575-001',
        brand: 'Mahindra',
        category: 'tractor',
        compatibility: ['Mahindra 575 DI', 'Mahindra 585 DI', 'Mahindra 595 DI'],
        description: 'High-quality oil filter for Mahindra tractors. Ensures clean oil circulation and protects engine components.',
        inStock: true,
        featured: true,
        price: 'Rs. 850'
    },
    {
        id: 'fuel-filter-new-holland',
        title: 'Fuel Filter New Holland TT Series',
        partNumber: 'FF-NH-TT-002',
        brand: 'New Holland',
        category: 'tractor',
        compatibility: ['New Holland TT45', 'New Holland TT50', 'New Holland TT55'],
        description: 'Genuine fuel filter for New Holland TT series tractors. Removes impurities from fuel system.',
        inStock: true,
        featured: false,
        price: 'Rs. 1,200'
    },
    {
        id: 'hydraulic-pump-massey',
        title: 'Hydraulic Pump Assembly - Massey Ferguson',
        partNumber: 'HP-MF-240-003',
        brand: 'Massey Ferguson',
        category: 'tractor',
        compatibility: ['Massey Ferguson 240', 'Massey Ferguson 260'],
        description: 'Complete hydraulic pump assembly for Massey Ferguson tractors. Ensures optimal hydraulic system performance.',
        inStock: false,
        featured: true,
        price: 'Rs. 18,500'
    },
    {
        id: 'brake-shoe-set-sonalika',
        title: 'Brake Shoe Set Sonalika DI 35',
        partNumber: 'BS-SNK-35-004',
        brand: 'Sonalika',
        category: 'tractor',
        compatibility: ['Sonalika DI 35', 'Sonalika DI 45'],
        description: 'Complete brake shoe set for Sonalika tractors. High-friction material for reliable braking performance.',
        inStock: true,
        featured: false,
        price: 'Rs. 2,800'
    },

    // Rotavator Parts  
    {
        id: 'rotavator-blade-lemken',
        title: 'Rotavator Blade Set - Lemken Compatible',
        partNumber: 'RB-LMK-001',
        brand: 'Lemken',
        category: 'rotavator',
        compatibility: ['Lemken Zirkon 7', 'Lemken Zirkon 8', 'Lemken Zirkon 9'],
        description: 'Hardened steel rotavator blades for superior soil cultivation. Set of 36 pieces.',
        inStock: true,
        featured: true,
        price: 'Rs. 4,500'
    },
    {
        id: 'gearbox-rotavator-universal',
        title: 'Rotavator Gearbox Universal 540 RPM',
        partNumber: 'GB-ROT-540-002',
        brand: 'Universal',
        category: 'rotavator',
        compatibility: ['Most 5-7 feet rotavators', 'PTO driven implements'],
        description: 'Heavy-duty gearbox for rotavators. 540 RPM input, robust cast iron construction.',
        inStock: true,
        featured: false,
        price: 'Rs. 12,000'
    },
    {
        id: 'pto-shaft-rotavator',
        title: 'PTO Drive Shaft for Rotavator',
        partNumber: 'PTO-ROT-003',
        brand: 'Universal',
        category: 'rotavator',
        compatibility: ['Standard rotavators', 'Cultivators', 'Harrows'],
        description: 'Universal PTO drive shaft with safety clutch. Adjustable length 710-910mm.',
        inStock: false,
        featured: false,
        price: 'Rs. 8,800'
    },

    // Tiller Parts
    {
        id: 'tiller-blade-kubota',
        title: 'Power Tiller Blade Set - Kubota',
        partNumber: 'TB-KUB-004',
        brand: 'Kubota',
        category: 'tiller',
        compatibility: ['Kubota B1241', 'Kubota B1181', 'Kubota B1161'],
        description: 'Original Kubota power tiller blades. Set of 8 pieces for 2-wheel tractors.',
        inStock: true,
        featured: true,
        price: 'Rs. 3,200'
    },
    {
        id: 'engine-valve-yanmar',
        title: 'Engine Valve Set - Yanmar Diesel',
        partNumber: 'EV-YMR-005',
        brand: 'Yanmar',
        category: 'tiller',
        compatibility: ['Yanmar L48', 'Yanmar L70', 'Yanmar L100'],
        description: 'Complete intake and exhaust valve set for Yanmar diesel engines used in tillers.',
        inStock: true,
        featured: false,
        price: 'Rs. 2,400'
    },
    {
        id: 'clutch-assembly-iseki',
        title: 'Clutch Assembly Iseki Power Tiller',
        partNumber: 'CA-ISK-006',
        brand: 'Iseki',
        category: 'tiller',
        compatibility: ['Iseki TA207', 'Iseki TA317', 'Iseki TA417'],
        description: 'Complete clutch assembly for Iseki power tillers. Includes pressure plate and clutch disc.',
        inStock: false,
        featured: false,
        price: 'Rs. 7,500'
    },

    // Engine Parts
    {
        id: 'piston-ring-set-perkins',
        title: 'Piston Ring Set - Perkins Engine',
        partNumber: 'PR-PER-007',
        brand: 'Perkins',
        category: 'engine',
        compatibility: ['Perkins 103-07', 'Perkins 103-10', 'Perkins 103-13'],
        description: 'Standard size piston ring set for Perkins 3-cylinder engines. Complete set for one engine.',
        inStock: true,
        featured: true,
        price: 'Rs. 4,800'
    },
    {
        id: 'water-pump-deutz',
        title: 'Water Pump Assembly - Deutz',
        partNumber: 'WP-DTZ-008',
        brand: 'Deutz',
        category: 'engine',
        compatibility: ['Deutz F2L511', 'Deutz F3L511', 'Deutz F4L511'],
        description: 'Complete water pump assembly for Deutz air-cooled engines. Includes gaskets and seals.',
        inStock: true,
        featured: false,
        price: 'Rs. 6,200'
    },

    // Hydraulic Parts
    {
        id: 'hydraulic-cylinder-john-deere',
        title: 'Hydraulic Cylinder - John Deere',
        partNumber: 'HC-JD-009',
        brand: 'John Deere',
        category: 'hydraulic',
        compatibility: ['John Deere 5036C', 'John Deere 5042C', 'John Deere 5050E'],
        description: 'Heavy-duty hydraulic cylinder for loader applications. 3000 PSI working pressure.',
        inStock: false,
        featured: true,
        price: 'Rs. 15,800'
    },
    {
        id: 'hydraulic-seal-kit-case',
        title: 'Hydraulic Seal Kit - Case IH',
        partNumber: 'HSK-CIH-010',
        brand: 'Case IH',
        category: 'hydraulic',
        compatibility: ['Case IH JX55', 'Case IH JX65', 'Case IH JX75'],
        description: 'Complete hydraulic seal and O-ring kit for Case IH tractors. Premium quality seals.',
        inStock: true,
        featured: false,
        price: 'Rs. 3,600'
    },

    // Transmission Parts
    {
        id: 'clutch-plate-ford',
        title: 'Clutch Plate Assembly - Ford Tractor',
        partNumber: 'CP-FRD-011',
        brand: 'Ford',
        category: 'transmission',
        compatibility: ['Ford 3600', 'Ford 4600', 'Ford 5600'],
        description: 'Single clutch plate assembly for Ford tractors. 11-inch diameter with ceramic facing.',
        inStock: true,
        featured: false,
        price: 'Rs. 5,400'
    },
    {
        id: 'pto-clutch-same',
        title: 'PTO Clutch Assembly - SAME',
        partNumber: 'PC-SAM-012',
        brand: 'SAME',
        category: 'transmission',
        compatibility: ['SAME Dorado 70', 'SAME Dorado 80', 'SAME Dorado 90'],
        description: 'PTO clutch assembly for SAME tractors. Wet-type multi-disc clutch system.',
        inStock: true,
        featured: false,
        price: 'Rs. 8,900'
    },

    // Additional Featured Products
    {
        id: 'air-filter-belarus',
        title: 'Air Filter Element - Belarus MTZ',
        partNumber: 'AF-BLR-013',
        brand: 'Belarus',
        category: 'tractor',
        compatibility: ['Belarus MTZ-50', 'Belarus MTZ-80', 'Belarus MTZ-82'],
        description: 'High-efficiency air filter for Belarus tractors. Ensures clean air intake for optimal engine performance.',
        inStock: true,
        featured: true,
        price: 'Rs. 1,850'
    },
    {
        id: 'starter-motor-zetor',
        title: 'Starter Motor - Zetor Crystal',
        partNumber: 'SM-ZTR-014',
        brand: 'Zetor',
        category: 'engine',
        compatibility: ['Zetor Crystal 8011', 'Zetor Crystal 8045', 'Zetor Crystal 10011'],
        description: '12V starter motor for Zetor Crystal series. Heavy-duty construction for reliable starting.',
        inStock: false,
        featured: true,
        price: 'Rs. 12,500'
    },
    {
        id: 'hydraulic-filter-landini',
        title: 'Hydraulic Filter - Landini',
        partNumber: 'HF-LND-015',
        brand: 'Landini',
        category: 'hydraulic',
        compatibility: ['Landini Rex 70', 'Landini Rex 80', 'Landini Rex 90'],
        description: 'Premium hydraulic filter for Landini tractors. Micron-rated filtration for system protection.',
        inStock: true,
        featured: false,
        price: 'Rs. 2,100'
    }
]

// Helper functions for product data
export const getFeaturedProducts = (limit?: number): Product[] => {
    const featured = sampleProducts.filter(product => product.featured)
    return limit ? featured.slice(0, limit) : featured
}

export const getProductsByCategory = (category: string, limit?: number): Product[] => {
    const filtered = sampleProducts.filter(product => product.category === category)
    return limit ? filtered.slice(0, limit) : filtered
}

export const getInStockProducts = (limit?: number): Product[] => {
    const inStock = sampleProducts.filter(product => product.inStock)
    return limit ? inStock.slice(0, limit) : inStock
}

export const getProductById = (id: string): Product | undefined => {
    return sampleProducts.find(product => product.id === id)
}

export const searchProducts = (query: string): Product[] => {
    const lowercaseQuery = query.toLowerCase()
    return sampleProducts.filter(product =>
        product.title.toLowerCase().includes(lowercaseQuery) ||
        product.partNumber.toLowerCase().includes(lowercaseQuery) ||
        product.brand.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery) ||
        product.compatibility.some(comp => comp.toLowerCase().includes(lowercaseQuery))
    )
}

// Product categories with counts
export const getProductCategories = () => {
    const categories = sampleProducts.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    return Object.entries(categories).map(([name, count]) => ({
        name,
        count,
        displayName: name.charAt(0).toUpperCase() + name.slice(1) + ' Parts'
    }))
}

// Popular brands with counts
export const getPopularBrands = () => {
    const brands = sampleProducts.reduce((acc, product) => {
        acc[product.brand] = (acc[product.brand] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    return Object.entries(brands)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
}