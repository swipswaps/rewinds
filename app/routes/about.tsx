import { json, useLoaderData } from 'remix';

import { Anchor, Image } from '~/components';
import { dataMainStacks, dataReferenceStacks, dataFeatures } from '~/data';
import { Layout } from '~/layouts';

import type { LoaderFunction } from 'remix';
import type { StackItem } from '~/types';

type LoaderData = {
  mainStacks: StackItem[];
  referenceStacks: StackItem[];
  features: string[];
};

export const loader: LoaderFunction = async () => {
  return json({
    features: dataFeatures,
    mainStacks: dataMainStacks,
    referenceStacks: dataReferenceStacks,
  });
};

export default function AboutRoute() {
  const { mainStacks, referenceStacks, features } = useLoaderData<LoaderData>();

  return (
    <Layout className="prose dark:prose-invert">
      <h1>About</h1>
      <p>
        <Anchor href="https://rewinds.mhaidarhanif.com">Rewinds</Anchor> is a
        Remix Tailwind Starter Kit made by{' '}
        <Anchor href="https://mhaidarhanif.com">M Haidar Hanif</Anchor> (
        <Anchor href="https://github.com/mhaidarhanif">@mhaidarhanif</Anchor>).
      </p>

      <p>
        It is a demo project template you can freely use for any purpose. On
        GitHub, you can directly use this template as your own repo.
      </p>

      <p>
        The goal is to have several examples and demos to combine the best
        Tailwind-related ecosystem such as Tailwind CSS v3, Tailwind UI,
        Headless UI, Radix UI, Vechai UI, and more. Another thing is that we
        want to encourage to follow{' '}
        <Anchor href="https://web.dev/accessibility">
          the accessibility guidelines
        </Anchor>
        . So keep in mind this is not intended towards simplicity, rather to
        collect as much as styling practices as it can.
      </p>

      <Image src="/assets/screenshots/home.png" alt="Home Page Screenshot" />

      <h2>Links</h2>
      <ul>
        <li>
          Preview demo:{' '}
          <Anchor href="https://rewinds.mhaidarhanif.com">
            rewinds.mhaidarhanif.com
          </Anchor>
        </li>
        <li>
          GitHub repo:{' '}
          <Anchor href="https://github.com/mhaidarhanif/rewinds">
            mhaidarhanif/rewinds
          </Anchor>
        </li>
      </ul>

      <h2>Features</h2>
      <ul>
        {features.map((item) => {
          return <li key={item.substring(0, 3)}>{item}</li>;
        })}
      </ul>

      <h2>Main Stacks</h2>
      <p>The list of the main libraries and tools. Used as dependencies.</p>
      <ul>
        {mainStacks.map((item) => {
          return (
            <li key={item.name}>
              <Anchor href={item.href}>{item.name}</Anchor>
              {item.description && <span> – {item.description}</span>}
              <ul>
                {item.subStacks &&
                  item.subStacks.map((subItem) => {
                    return (
                      <li key={subItem.name}>
                        {subItem.href ? (
                          <Anchor href={subItem.href}>{subItem.name}</Anchor>
                        ) : (
                          <span>{subItem.name}</span>
                        )}
                        {subItem.description && (
                          <span> – {subItem.description}</span>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ul>

      <h2>Reference Stacks</h2>
      <p>
        The list of the references for UI and component styling. Not used as
        dependencies, only for inspirations or the code itself can just be
        copied.
      </p>
      <ul>
        {referenceStacks.map((item) => {
          return (
            <li key={item.name}>
              <Anchor href={item.href}>{item.name}</Anchor>
              {item.description && <span> – {item.description}</span>}
            </li>
          );
        })}
      </ul>

      <p>
        If you need more resources, check out{' '}
        <Anchor href="https://github.com/aniftyco/awesome-tailwindcss">
          awesome-tailwindcss
        </Anchor>
      </p>
    </Layout>
  );
}
