import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import {MYWORLD_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'MIVIVZ';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'myWorld',
          title: '里世界',
          href: MYWORLD_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />老邓头 GitHub</>,
          href: 'https://github.com/18223851720',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
