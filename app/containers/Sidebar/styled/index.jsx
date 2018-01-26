import styled from 'styled-components2';

export const RadioContainer = styled.div`
  width: 50%;
  display: inline-block;
`;

export const TabIcon = styled.img`
  height: 14px;
  margin-right: 5px;
`;

export const SidebarNothingSelected = styled.span`
  text-align: center;
  color: rgba(0, 0, 0, 0.67);
  margin-top: 25px;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  height: 100%;
  max-width: 435px;
  background: #fff;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  word-break: normal;
  word-wrap: break-word;
  position: relative;
  list-style: none;
  margin: 0;
  height: 100%;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 51px;
`;

export const Tab = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 51px;
  min-height: 51px;
  width: 100%;
  color: white;
  background-color: white;
  border-bottom: 2px solid ${props => (props.active ? props.theme.primary : '#E1E4E9')};
  color: ${props => (props.active ? props.theme.primary : '#42526E')};
  font-weight: 500;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.primary};
  }
`;

export const ListConcealer = styled.div`
  display: flex;
  transition: transform .25s ease-out;
  height: 100%;
  flex-flow: row nowrap;
  width: 870px;
  transform: translateX(${({ sidebarType }) => (sidebarType === 'all' ? -435 : 0)}px);
  overflow: hidden;
`;
