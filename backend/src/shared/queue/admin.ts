

import {kafka} from './client.ts'




async function init(){
    const admin = kafka.admin();
    console.log('Admin connecting...');
    admin.connect();
    console.log('Admin connection successful');
    console.log('Creating Topic: salesRepAssignment...  ');
    await admin.createTopics({
        topics: [{
            topic: 'salesRepAssignment',
            numPartitions: 2,
        }]
    })
    console.log('Topic creation successful');
console.log('Closing Admin connection...');
await admin.disconnect()
}

init();