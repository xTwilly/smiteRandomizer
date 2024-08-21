package randomizer;

public class Kali extends godClass{ 
    public Kali() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Kali test = new Kali();
    System.out.println(test.getDamageType());
    }
}
