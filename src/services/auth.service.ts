import { axiosClassic, axiosWithAuth } from '@/api/interceptors';
import { IAuthForm, IAuthResponse } from '@/types/auth.types';
import { removeFromStorage, saveTokenStorage } from './auth-token.service';

export const authService = {
  async main(type: 'login' | 'register', data: IAuthForm) {
    const response = await axiosClassic.post<IAuthResponse>(`/auth/${type}`);
    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);
    return response;
  },

  async getNewTokens() {
    const response = await axiosWithAuth.post<IAuthResponse>(
      '/auth/login/access-token'
    );
    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);
    return response;
  },
  async logout() {
    const response = await axiosClassic.post<boolean>('/auth/logout');
    if (response.data) removeFromStorage();
    return response;
  },
};
