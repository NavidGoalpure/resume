
import React from 'react';
import ShowImages from '../components/skillsTour/ShowImages'
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <section id="one" className="main-container">
      <div className="container">
        <div className="content">
          <ShowImages />
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
