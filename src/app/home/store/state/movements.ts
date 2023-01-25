import { Movement } from '../../interfaces/list';

export interface MovementsState {
  loading: boolean;
  error: unknown;
  listMovementes: Movement[];
  offSet: number;
  maxItems: number;
  noMoreItems: boolean;
}
