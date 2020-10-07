

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Row, Col } from 'reactstrap';

const AboutMe = () => {
  const { data, loading } = useGetUser();

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title="About Me - Harsh Raj"
        className="about-page"
        canonicalPath="/about">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title`}>Hello, Welcome</h1>
              <h4 className={`subtitle`}>To About Page</h4>
              <p className={`subsubTitle`}>Feel free to read short description about me.</p>
            </div>
          </Col>
          <Col md="6">
            <div>
              <p>My name is Harsh Raj and I am an experienced software engineer and freelance developer. </p>
              <p>
              I have a Bachelor's degree in Computer Science and one year of experience working
              on a wide range of technologies and projects from Java development to
                modern desktop and web applications in React and Angular.
              </p>
              <p>
              Throughout my career, I have acquired technical knowledge and the ability to solve complex
              problem by breaking it into smaller chunks.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default AboutMe;
