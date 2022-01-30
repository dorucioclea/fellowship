import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import configuration from 'config/configuration';
import { ApiConfigService } from './common/api.config.service';
import { ApiService } from './common/api.service';
import { CachingService } from './common/caching.service';
import { TransactionProcessorCron } from './crons/transaction.processor.cron';
import { MetricsService } from './endpoints/metrics/metrics.service';
import { PubSubProvider } from './pubsub.config';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    CacheModule.register(),
    ConfigModule.forRoot({ load: [configuration] }),
  ],
  controllers: [],
  providers: [
    ApiConfigService,
    MetricsService,
    ApiService,
    CachingService,
    PubSubProvider,
    TransactionProcessorCron,
  ],
})
export class TransactionProcessorModule {}
