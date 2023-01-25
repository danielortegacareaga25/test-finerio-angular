import { MeResponse } from '../../interfaces/me.interface';

export interface CoreState {
  me: MeResponse | null;
  token: string | null;
  error: unknown;
  isLoading: boolean;
}
