import { useStorage } from '@vueuse/core';

const token = useStorage('token', '');
const userRole = useStorage('userRole', '');

export const useAuth = () => {
  const login = (newToken, role) => {
    token.value = newToken;
    userRole.value = role;
  };

  const logout = () => {
    token.value = '';
    userRole.value = '';
  };

  return { token, userRole, login, logout };
};
