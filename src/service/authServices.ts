import axiosClient from './axiosClient';
/**
 *
 * @param payload
 * @returns
 */
export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await axiosClient.post<LoginResponse>(
    '/users/login',
    payload,
  );
  return response.data;
};

/**
 *
 * @param payload
 * @returns
 */

export const register = async (
  payload: RegisterPayload,
): Promise<RegisterResponse> => {
  const response = await axiosClient.post<RegisterResponse>(
    '/users/register',
    payload,
  );
  return response.data;
};
