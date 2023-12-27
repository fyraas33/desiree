import Tmcard from "@/assest/tmcard/Tmcard";
import hf from "@/assest/img/hf.jpg"
import sh from "@/assest/img/sh.jpg"
const Team = () => {
    return (
      <section className="pb-10 pt-15 dark:bg-dark lg:pb-20 lg:pt-[53px] teambg " id="team">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary section__header">
                  Our Team
                </span>
               
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
  
          <div className="-mx-6 flex flex-wrap justify-center  lg:space-x-9 ">
          
        <Tmcard
       
          name="Haythem Fetoui"
          profession="Product Designer / 3d Artist"
          imageSrc={hf}
          facebook="https://www.facebook.com/haytheem.lfeetooui"
          mail="Fetouihaythem29@gmail.com"
          instagram="https://www.instagram.com/haythem_fetoui"
          linkedin="https://www.linkedin.com/in/haythem-fetoui-2888461b5/?fbclid=IwAR0bsNO_Paa9ddknYJ4XUfGwC1e-mCT644-srzj32C1WaVwWXFi5ATK3A1s"
          phone="+21629010805"
          />
           <Tmcard
          name="Sahar Tekaya"
          profession=" Interior Designer / 3d Artist "
          imageSrc={sh}
          facebook="https://www.facebook.com/sahar.tekaya.9"
          mail="sahartt85@gmail.com"
          instagram='https://www.instagram.com/sahar.tekaya.9'
          linkedin="https://www.linkedin.com/in/sahar-tekaya-0910ab22a/?fbclid=IwAR2nLLp1eaggjEj7WwY_zyu031dDrmfmlucdRH4Fzy_rJZdJkf5hnlYHwbo"
          phone="+21658188814"
          />
         
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;
  
  