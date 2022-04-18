import { Admin, User } from './../models/accounts.model';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  supabase: SupabaseClient = createClient( environment.supabaseUrl, environment.supabaseKey);

  constructor() {}

  async addUser(user: User){
    const { data, error } = await this.supabase
      .from <User>('users')
      .insert(user)
    return { data, error};
  }

  async getUsers() {
    const { data: users, error } = await this.supabase
      .from<User>('users')
      .select('*')
    return { users, error };
  }

  // async update(todo: Todo) {
  //   const {data, error} = await this.supabase
  //     .from('todo')
  //     .update(todo)
  //     .match({ id: todo.id})
  //   return { data, error };
  // }
}
