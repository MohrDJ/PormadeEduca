import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/cursos">
              <a>Cursos</a>
            </Link>
          </li>
          <li>
            <Link href="/professores">
              <a>Professores</a>
            </Link>
          </li>
          <li>
            <Link href="/formularios">
              <a>Formulários</a>
            </Link>
          </li>
          <li>
            <Link href="/modulos">
              <a>Módulos</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
