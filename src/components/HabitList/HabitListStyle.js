import styled from "styled-components";


export const ListComponent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 24px 0;
  padding: 20px 4px;
  max-height: 490px;
  overflow: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &::-webkit-scrollbar{
    width: 0px;
  }

  &::-webkit-scrollbar-track{
    width: 12px;
    background-color: #fff;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb{
    padding: 0 3px;
    width: 8px;
    background-color: lightgrey;
    border-radius: 12px;
  }

  a{
    text-decoration: none;
    width: 100%;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    animation: fadeIn 0.6s ease-in-out;

    &.active{
      background: #6054ba;
      color: #ffffff;
  
      .icon{
        color: white;
      }

      span{
        color: #ffffff;
      }
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: transparent;
  color: #000000;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;

  &.active{
    background: #6054ba;
    color: #ffffff;

    .icon{
      color: white;
    }
  }

  .icon{
    border: 0;
    background: none;
  }

  .pen-icon{
    color: #007bff;
  }

  .trash-icon{
    color: #FF0000;
  }
`;