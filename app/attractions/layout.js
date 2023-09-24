import './attractions.css';
import Navbar from '../components/navbar'; // เปลี่ยน navbar เป็น Navbar
import { Container } from '@mui/material';

export default function Layout({
  children,
}) {
  return (
    <>
      <Navbar /> {/* เปลี่ยน navbar เป็น Navbar */}
      <Container maxWidth="xl">
        {children}
      </Container>
    </>
  );
}
