import { kafka } from './client.ts';

export default async function init({
    key,
    salesRepData,
    region,
}: {
    key: string;
    salesRepData: {};
    region: string;
}) {
    const producer = kafka.producer();
    console.log('Producer connecting...');
    await producer.connect();
    console.log('Producer connection successful');

    await producer.send({
        topic: 'salesRepAssignment',
        messages: [
            {
                partition: region === 'north' ? 0 : 1,
                key: key,
                value: JSON.stringify(salesRepData),
            },
        ],
    });

    console.log('Disconnecting producer...');
    await producer.disconnect();
}

