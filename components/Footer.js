import Reference from './Reference';
export default function Footer() {
  const Foot = () => {
    return <div className="bg-blue-900 text-white h-20">Footer goes here</div>;
  };
  return (
    <div>
      <Reference />
      <Foot />
    </div>
  );
}
