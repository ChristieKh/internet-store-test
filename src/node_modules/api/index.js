import categories from './mockCategories';
import items from './mockItems';

export const fetchCategoriesApi = async () => {
    return new Promise(resolve => {
        resolve(categories)
    })
};

export const fetchItemsApi = async () => {
    return new Promise(resolve => {
        resolve(items)
    })
};

export const fetchCardApi = async (id) => {
    return new Promise(resolve => {
        const card = items.find(card => card.id == id);
        resolve(card)
    })
};
