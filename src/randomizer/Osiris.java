package randomizer;

public class Osiris extends godClass{ 
    public Osiris() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Osiris test = new Osiris();
    System.out.println(test.getDamageType());
    }
}
