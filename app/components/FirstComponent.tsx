'use client'
import { createClient } from '@/utils/supabase/client';
import { useEffect } from 'react';


export default function FirstComponent() {
    useEffect(() => {
        const loadGatos = async () => {
            try {
                const supabase = createClient();
                console.log(supabase);

                const { data, error } = await supabase.from('volunteer').select();

                console.log(data, error);
            } catch (error) {
                console.log(error);
            }
        }
        loadGatos()

    }, [])

    return <div>FirstComponent</div>
}