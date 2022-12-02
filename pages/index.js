import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Badge,
  Icon,
  Link,
  List,
  ListItem,
  Tabbar,
  TabbarLink,
} from 'konsta/react';
import { MdPerson, MdEmail, MdToday, MdFileUpload } from 'react-icons/md';

export default function BadgePage() {
  return (
    <Page>
      <Navbar
        title="Badge"
        right={
          <Link navbar iconOnly>
            <Icon
              material={<MdPerson className="w-6 h-6" />}
              badge="5"
              badgeColors={{ bg: 'bg-red-500' }}
            />
          </Link>
        }
      />
      <Tabbar labels icons className="bottom-0 fixed" id='mainNav'>
        <TabbarLink
          active
          icon={
            <Icon
              material={<MdEmail className="w-6 h-6" />}
              badge="5"
              badgeColors={{ bg: 'bg-green-500' }}
            />
          }
          label="Inbox"
        />
        <TabbarLink
          icon={
            <Icon
              material={<MdToday className="w-6 h-6" />}
              badge="7"
              badgeColors={{ bg: 'bg-red-500' }}
            />
          }
          label="Calendar"
        />
        <TabbarLink
          icon={
            <Icon
              material={<MdFileUpload className="w-6 h-6" />}
              badge="1"
              badgeColors={{ bg: 'bg-red-500' }}
            />
          }
          label="Upload"
        />
      </Tabbar>
      <List strong inset>
        <ListItem
          media={<MdPerson className="w-6 h-6" />}
          title="Foo Bar"
          after={<Badge colors={{ bg: 'bg-gray-500' }}>0</Badge>}
        />

        <ListItem
          media={<MdPerson className="w-6 h-6" />}
          title="Ivan Petrov"
          after={<Badge>CEO</Badge>}
        />

        <ListItem
          media={<MdPerson className="w-6 h-6" />}
          title="John Doe"
          after={<Badge colors={{ bg: 'bg-green-500' }}>5</Badge>}
        />

        <ListItem
          media={<MdPerson className="w-6 h-6" />}
          title="Jane Doe"
          after={<Badge colors={{ bg: 'bg-yellow-500' }}>NEW</Badge>}
        />
      </List>
    </Page>
  );
}
