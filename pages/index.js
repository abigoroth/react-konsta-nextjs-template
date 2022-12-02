import React from 'react';
import { register, useForm, Controller } from "react-hook-form";
import {Select, Checkbox, MenuItem, TextField, Button, label, RadioGroup, FormControlLabel, Radio,
FormGroup} from "@mui/material";

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
  const { control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  const onSubmit = data => console.log(data);

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: true, maxLength: 20 }}
          render={({ field }) => <TextField {...field}
            label="Name"
            helperText={errors.firstName?.type == 'required' && 'Required'}
            fullWidth
            margin="normal" />
          }
        />
        <Controller
          name="select"
          control={control}
          render={({ field }) =>
            <Select{...field}
              label="Age" fullWidth margin="dense">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>}
        />
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <Button type="submit" variant="outlined" >Submit</Button>
      </form>
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
