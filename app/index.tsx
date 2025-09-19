import { Link } from 'expo-router';
import { Box, Button, ButtonText } from '@gluestack-ui/themed';
import { MotiView } from 'moti';
// import { useCounter } from '../store/useCounter';
// import { CounterText } from '../components/CounterDisplay';
// import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function Home() {
    // const { count, increment } = useCounter();

    // const saveCount = async () => {
    //     await addDoc(collection(db, 'counts'), { value: count, createdAt: Date.now() });
    // };

    return (
        <Box flex={1} justifyContent="center" alignItems="center" bg="$backgroundLight0">
            {/* <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <CounterText>Count: {count}</CounterText>
            </MotiView>

            <Button onPress={increment}>
                <ButtonText>Increment</ButtonText>
            </Button>

            <Button mt="$4" onPress={saveCount}>
                <ButtonText>Save to Firebase</ButtonText>
            </Button> */}

            <Link href="/three" style={{ marginTop: 20 }}>
                <Button>
                    <ButtonText>Go to 3D Page</ButtonText>
                </Button>
            </Link>
        </Box>
    );
}
