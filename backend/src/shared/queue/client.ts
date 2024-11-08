import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
const brokers = process.env.KAFKA_BROKERS!.split(',');
console.log(brokers);
import { Kafka } from "kafkajs";
export const kafka = new Kafka({
    clientId: "salesRefMQ",
    brokers:brokers
    })