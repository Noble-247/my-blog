import Image from "next/image";

export default function ProfileImage() {
  return (
    <section className='w-full mx-auto'>
      <Image
        src={"/assets/Emmanuel.jpg"}
        alt='Emmanuel Ekpobimi'
        width={200}
        height={200}
        quality={100}
        priority={true}
        className='border-4 border-slate-700 dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
      />
    </section>
  );
}
