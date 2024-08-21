package randomizer;

public class Chaac extends godClass{ 
    public Chaac() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Chaac test = new Chaac();
    System.out.println(test.getDamageType());
    }
}
