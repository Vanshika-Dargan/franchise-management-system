import { Kafka } from "kafkajs";
export const kafka = new Kafka({
    clientId: "salesRefMQ",
    brokers:['192.168.29.55']
    })