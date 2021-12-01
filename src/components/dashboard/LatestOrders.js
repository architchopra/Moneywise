import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const orders = [
  {
    id: uuid(),
    ref: '+500',
    amount: 30.5,
    customer: {
      name: 'zerodah'
    },
    createdAt: 1555016400000,
    status: 'credit'
  },
  {
    id: uuid(),
    ref: '-1000',
    amount: 25.1,
    customer: {
      name: 'hdfc'
    },
    createdAt: 1555016400000,
    status: 'debit'
  },
  {
    id: uuid(),
    ref: '+410',
    amount: 10.99,
    customer: {
      name: 'icici'
    },
    createdAt: 1554930000000,
    status: 'credit'
  },
  {
    id: uuid(),
    ref: '+5000',
    amount: 96.43,
    customer: {
      name: 'cams'
    },
    createdAt: 1554757200000,
    status: 'credit'
  },
  {
    id: uuid(),
    ref: '-10000',
    amount: 32.54,
    customer: {
      name: 'bitcoin'
    },
    createdAt: 1554670800000,
    status: 'debit'
  },
  {
    id: uuid(),
    ref: '-185',
    amount: 16.76,
    customer: {
      name: 'sbi'
    },
    createdAt: 1554670800000,
    status: 'debit'
  }
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Recent Transactions" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Amount
              </TableCell>
              <TableCell>
                for
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.orders.map((order) => (
              <TableRow
                hover
                key={order.date}
              >
                <TableCell>
                  {order.cost}
                </TableCell>
                <TableCell>
                  {order.type}
                </TableCell>
                <TableCell>
                  {moment(order.date).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={order.status}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestOrders;
