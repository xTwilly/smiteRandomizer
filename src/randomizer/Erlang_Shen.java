package randomizer;

public class Erlang_Shen extends godClass{ 
    public Erlang_Shen() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Erlang_Shen test = new Erlang_Shen();
    System.out.println(test.getDamageType());
    }
}
