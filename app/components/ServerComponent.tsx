import { createClient } from '@/utils/supabase/server';

const Servercomponent = async () => {
    const supabase = await createClient();
    const { data: gatos, error: gatosError } = await supabase.from('kittens').select();
    console.log(gatos, gatosError, "prueba");

    return <div>FirstComponent</div>

}

export default Servercomponent;