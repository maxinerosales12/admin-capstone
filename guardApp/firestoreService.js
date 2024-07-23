import { collection, getDocs } from 'firebase/firestore';
import { db } from './firestoreConfig';

// Function to get data from the "violators" collection
const getViolatorsData = async () => {
    try {
        const collectionRef = collection(db, 'violators');
        const querySnapshot = await getDocs(collectionRef);
        const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return data;
    } catch (error) {
        console.error("Error fetching violators data: ", error);
        throw error;
    }
};

export { getViolatorsData };
