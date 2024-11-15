import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ff0000;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
`;

