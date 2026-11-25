import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Guides",
    description: (
      <>
        Use our guides to help you get familiar with the Forum Promotion
        platform and the community. They can help you and your website grow.
      </>
    ),
  },
  {
    title: "Our Services",
    description: (
      <>
        Our services are tailored to support the growth of your website and community.
        We provide a range of services, including Posting Packages, Graphics,
        Social Promotion, AI Writing (with accompanying visuals), and much more
        to foster your online presence and enagement.
      </>
    ),
  },
  {
    title: "Help",
    description: (
      <>
        If you are having issues with your account, advertising, or haven't been
        able to find the answer your answer, then you can:
        <ul className="test123">
          <li>
            Reach out via our{" "}
            <a href="https://forumpromotion.net/misc/contact">contact form. </a>
            <br></br>
            <div className="helpNotice">
              <b>Note:</b> Account related issues go through our contact
              form.
            </div>
          </li>
          <li>
            Post a question in{" "}
            <a href="https://forumpromotion.net/forums/community-matters.2/">
              Community Matters.
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
