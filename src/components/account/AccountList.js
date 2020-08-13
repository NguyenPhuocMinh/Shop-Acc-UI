import React from "react";
import {
  Filter,
  Pagination,
  List,
  TextInput,
  BooleanInput
} from "react-admin";
import GridList from './GridList';

const ProductFilter = props => (
  <Filter {...props}>
    <TextInput
      label="ra.action.search"
      source="q" alwaysOn
    />
    <BooleanInput source="activated" />
  </Filter>
);

const AccountList = ({ classes, ...props }) => {
  return (
    <List
      title="resources.accounts.title.list"
      {...props}
      sort={{ field: 'id', order: 'ASC' }}
      filters={<ProductFilter />}
      perPage={20}
      pagination={<Pagination rowsPerPageOptions={[10, 20, 40]} />}
      exporter={false}
    >
      <GridList />
    </List>
  )
};

export default AccountList;
