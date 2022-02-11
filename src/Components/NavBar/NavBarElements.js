import styled from "styled-components";

export const Menu = styled.ul`
    height: 7vw;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    list-style: none;
    background-color: RGB(53, 23, 14);
    z-index: 3;

    @media screen and (max-width: 960px) {
    background-color: RGB(53, 23, 14);
    text-decoration: none;
    position: absolute;
    top: 25vw;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 1s all ease;
}
`;

export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 960px) {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    }
`;

export const MenuItemLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    text-decoration: none;
    font-size: 2.5vw;
    font-weight: bold;
    color:  RGB(239, 192, 144);
    cursor: pointer;
    transition: 1s all ease;
    
    &:hover {
    text-shadow: 0 0 5px black, 0 0 5px RGB(244, 149, 32), 0 0 5px RGB(244, 149, 32), 0 0 5px RGB(244, 149, 32), 0 0 5px RGB(244, 149, 32), 0 0 5px RGB(244, 149, 32);
    transition: 0.2s all ease;
    }
`;

export const Burger = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color:  RGB(239, 192, 144);
    }
`;
