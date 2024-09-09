import axios from 'axios';
import { Admin } from '../interfaces/interfaces'; 

export const getAdminData = async (): Promise<Admin[]> => {
  try {
    const response = await axios.get('http://localhost:8080/admin');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching admin data');
  }
};


export const getAdminByEmail = async (email: string): Promise<Admin | null> => {
  try {
    const response = await axios.get(`http://localhost:8080/admin?email=${email}`);
    const admins: Admin[] = response.data;
    return admins.length > 0 ? admins[0] : null;
  } catch (error) {
    throw new Error('Error fetching admin by email');
  }
};


