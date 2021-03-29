import React from 'react'

import PropTypes from 'prop-types';
import {Button, ListItem} from '@material-ui/core';
import Link from 'next/link'


const ButtonLink = React.forwardRef(
    ({className, to, hrefAs, children }, ref) => {
      return (
          <Link href={to} as={to} prefetch ref={ref}>
            <a className={className}>
              {children}
            </a>
          </Link>
      )
    })

const NavItem = ({
  href,
  icon: Icon,
  title,
  ...rest
}) => {

  return (
      <ListItem
          disableGutters
          sx={{
            display: 'flex',
            py: 0
          }}
          {...rest}
      >
        <Button
            component={ButtonLink}
            sx={{
              color: 'text.secondary',
              fontWeight: 'medium',
              justifyContent: 'flex-start',
              letterSpacing: 0,
              py: 1.25,
              textTransform: 'none',
              width: '100%',
              ...(true && {
                color: 'primary.main'
              }),
              '& svg': {
                mr: 1
              }
            }}
            to={href}
        >
          {Icon && (
              <Icon size="20"/>
          )}
          <span>
          {title}
        </span>
        </Button>
      </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
