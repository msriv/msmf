import Head from 'next/head'
import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
// function AllPosts({preview}) {
//   const { loading, error, data } = useQuery(ALL_POSTS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
    
//   return (
//     <Layout preview={preview}>
//            <Head>
//              <title>MSMF | Home</title>
//            </Head>
//            <Container>
//             {data.posts.edges.map(item => {
//               return (<HeroPost
//                 key={item.node.slug}
//                 title={item.node.title}
//                 coverImage={item.node.featuredImage}
//                 date={item.node.date}
//                 author={item.node.author?.node}
//                 slug={item.node.slug}
//                 excerpt={item.node.excerpt}
//               />)
//             })} 
//             {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
//           </Container>
//         </Layout>
//   );
// }

// export default function Index({ allPosts: { edges }, preview }) {
//   // const { loading, error, data } = useQuery(ALL_POSTS);
//   // console.log(data);
//   // const heroPost = edges[0]?.node
//   // const morePosts = edges.slice(1)

//   return (<AllPosts preview={preview}/>)
// }

const Index = () => {
  return (
    <>
    </>
  )
}

export default Index;