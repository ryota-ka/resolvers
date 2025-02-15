import {
  FieldValues,
  ResolverResult,
  UnpackNestedValue,
  ResolverOptions,
} from 'react-hook-form';
import { z } from 'zod';

export type Resolver = <T extends z.Schema<any, any>>(
  schema: T,
  schemaOptions?: Partial<z.ParseParams>,
  factoryOptions?: {
    /**
     * @default async
     */
    mode?: 'async' | 'sync';
    /**
     * Return the raw input values rather than the parsed values.
     * @default false
     */
    rawValues?: boolean;
  },
) => <TFieldValues extends FieldValues, TContext>(
  values: UnpackNestedValue<TFieldValues>,
  context: TContext | undefined,
  options: ResolverOptions<TFieldValues>,
) => Promise<ResolverResult<TFieldValues>>;
