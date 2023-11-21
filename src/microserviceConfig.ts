import { KafkaOptions, Transport } from '@nestjs/microservices';

export const microserviceConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'issue-report',
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'issue-report',
    },
  },
};
