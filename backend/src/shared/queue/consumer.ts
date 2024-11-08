import { kafka } from './client.ts';

async function init() {
    const consumer = kafka.consumer({ groupId: 'salesRep' });

    console.log('Consumer connecting...');
    await consumer.connect();
    console.log('Consumer connected successfully.');

    await consumer.subscribe({
        topics: ['salesRepAssignment'],
        fromBeginning: true,
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            try {
                console.log({
                    topic,
                    partition,
                    key: message.key?.toString(),
                    value: message.value?.toString(),
                    offset: message.offset,
                });
            } catch (error) {
                console.error('Error processing message:', error);
                pause();
            }
            
        },
    });
}

init();
