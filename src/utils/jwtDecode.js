import { jwtDecode } from 'jwt-decode'; 

const decodeToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded = jwtDecode(token); 
    return {
      email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"], // Email adresini alıyoruz
      role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"], // Rolü alıyoruz
      id: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"], // Kullanıcı ID'sini alıyoruz
    };
  } catch (error) {
    console.error("Geçersiz token:", error);
    return null;
  }
};

export default decodeToken;
